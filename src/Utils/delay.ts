export function delay(seconds: number) {
  return new Promise<void>(resolve => {
    setTimeout(resolve, seconds);
  });
}
