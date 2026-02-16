import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Principal } from '@dfinity/principal';
import type { Inquiry } from '../backend';

export function useGetInquiry(sender: Principal | undefined) {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<Inquiry | null>({
    queryKey: ['inquiry', sender?.toString()],
    queryFn: async () => {
      if (!actor || !sender) {
        return null;
      }
      try {
        return await actor.getInquiry(sender);
      } catch (error) {
        // If inquiry doesn't exist, return null instead of throwing
        return null;
      }
    },
    enabled: !!actor && !actorFetching && !!sender,
    retry: false
  });
}
