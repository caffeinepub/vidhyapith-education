import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";

actor {
  type Inquiry = {
    sender : Principal;
    name : Text;
    email : Text;
    message : Text;
  };

  module Inquiry {
    public func compare(inquiry1 : Inquiry, inquiry2 : Inquiry) : Order.Order {
      switch (inquiry1.sender.toText().compare(inquiry2.sender.toText())) {
        case (#equal) { inquiry1.name.compare(inquiry2.name) };
        case (order) { order };
      };
    };
  };

  let inquiries = Map.empty<Principal, Inquiry>();

  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public shared ({ caller }) func submitInquiry(name : Text, email : Text, message : Text) : async () {
    if (inquiries.containsKey(caller)) {
      Runtime.trap("Cannot submit multiple inquiries for the same user");
    };

    let newInquiry : Inquiry = {
      sender = caller;
      name;
      email;
      message;
    };

    inquiries.add(caller, newInquiry);
  };

  public query ({ caller }) func getInquiry(sender : Principal) : async Inquiry {
    if (caller != sender and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own inquiry");
    };
    
    switch (inquiries.get(sender)) {
      case (null) { Runtime.trap("Inquiry does not exist") };
      case (?inquiry) { inquiry };
    };
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all inquiries");
    };
    
    inquiries.values().toArray().sort();
  };
};
