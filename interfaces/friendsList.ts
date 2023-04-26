export interface FriendsList {
  username: string;
  status: string;
  playing: {
    status: boolean;
    game: string;
  };
}
