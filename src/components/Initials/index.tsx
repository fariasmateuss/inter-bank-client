import { CustomInitials } from './styles';

type InitialsProps = {
  initials: string;
};

export function Initials({ initials }: InitialsProps) {
  return <CustomInitials>{initials}</CustomInitials>;
}
