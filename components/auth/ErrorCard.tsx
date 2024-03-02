import { CardWrapper } from '@/components/auth/CardWrapper';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

export default function ErrorCard() {
  return (
    <CardWrapper
      headerLabel="Oops something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex justify-center items-center">
        <ExclamationTriangleIcon className="text-destructive" />
      </div>
    </CardWrapper>
  );
}
