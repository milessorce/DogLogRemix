export default function clamp(min: number, max: number, input: number) {
  return Math.max(min, Math.min(input, max));
}
