type TransitionImageProps = {
  transitionName: string;
  src: string;
  alt: string;
};

export function TransitionImage({
  transitionName,
  src,
  alt,
}: TransitionImageProps) {
  return (
    <div
      className="relative aspect-video size-full overflow-hidden rounded-xl border border-border p-1"
      style={{ viewTransitionName: transitionName }}
    >
      <img
        src={src}
        alt={alt}
        className="block size-full rounded-lg object-cover"
      />
    </div>
  );
}
