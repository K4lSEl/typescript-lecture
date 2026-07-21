class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

// src/main.ts
function divide(a: number, b: number): number {
  // TODO 1: b が 0 なら throw new Error(...)、そうでなければ a / b を返す
  if (b === 0) {
    throw new ValidationError("0で割ることはできません");
  }
  return a / b;
}

try {
  // TODO 2: divide を呼んで、結果を console.log で表示
  console.log(divide(10, 2));
  console.log(divide(10, 0));
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(error);
  }
} finally {
  // TODO 4: 必ず実行されるログ
  console.log("計算を終了しました");
}
