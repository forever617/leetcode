const largestSumAfterKNegations = function(A: Array<number>, K: number): number {
  A = A.sort((a: number, b: number): number => a - b)
  let i: number = 0
  while(K) {
    if (A[i] >= 0) {
      break;
    }
    A[i] = -A[i]
    i++;
    K--;
  }
  if (K) {
    A = A.sort((a: number, b: number): number => a - b)
    A[0] = K % 2 > 0 ? -A[0] : A[0]
  }
  return A.reduce((prev: number, next: number): number => prev + next)
}