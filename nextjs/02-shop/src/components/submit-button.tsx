interface SubmitButtonProps {
  isPending: boolean;
  text: string;
  onClick?: () => void;
}

export default function SubmitButton({
  isPending,
  text,
  onClick,
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className="btn btn-primary w-full"
      disabled={isPending}
      onClick={onClick}
    >
      {isPending ? (
        <span className="loading loading-spinner loading-sm"></span>
      ) : (
        text
      )}
    </button>
  );
}
