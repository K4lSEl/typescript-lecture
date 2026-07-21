// src/main.ts
function divide(a: number, b: number): number {
  // TODO 1: b が 0 なら throw new Error(...)、そうでなければ a / b を返す
  if (b === 0) {
    throw new Error("0で割ることはできません");
  }
  return a / b;
}

try {
  // TODO 2: divide を呼んで、結果を console.log で表示
  const result = divide(10, 2);
  console.log(result);
} catch (error) {
  // TODO 3: (error as Error).message を console.error で表示
  console.error((error as Error).message);
} finally {
  // TODO 4: 必ず実行されるログ
  console.log("計算を終了しました");
}
