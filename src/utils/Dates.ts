import formatDistanceToNow from "date-fns/formatDistanceToNow";
import fromUnixTime from "date-fns/fromUnixTime";
import { fr } from "date-fns/locale";

export const timestampToFormattedDate = (timestamp: number) => {
  return formatDistanceToNow(fromUnixTime(timestamp), {
    locale: fr,
  });
};
