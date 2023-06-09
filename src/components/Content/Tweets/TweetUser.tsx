import { BaseUser as UserType } from '../../../types/User';

interface ITweetProps {
  user: UserType;
}

function TweetUser({ user }: ITweetProps) {
  return (
    <div className="post__avatar">
      <img
        src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
        alt=""
      />
    </div>
  );
}

export default TweetUser;