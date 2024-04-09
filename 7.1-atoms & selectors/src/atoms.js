import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 104,
});
export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});
export const notificationAtom = atom({
  key: "notificationAtom",
  default: 0,
});
export const messagingAtom = atom({
  key: "messagingAtom",
  default: 12,
});

export const TotalNotificationSelector = selector({
  key: "TotalNotificationSelector",
  get: ({ get }) => {
    const network = get(networkAtom);
    const jobs = get(jobsAtom);
    const notification = get(notificationAtom);
    const messaging = get(messagingAtom);
    return network + jobs + notification + messaging;
  },
});
