class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

function purchase(
  itemInput: string,
  quantityInput: string,
  stock: number,
): void {
  // trimは文字の先頭と末尾の空白をとる
  if (itemInput.trim().length === 0) {
    throw new ValidationError("商品名を入力してください。");
  }

  const quantity = Number(quantityInput);
  if (!Number.isInteger(quantity) || quantity <= 0) {
    throw new ValidationError("数量は1以上の整数で入力してください。");
  }

  if (quantity > stock) {
    throw new ValidationError(`在庫が不足しています（在庫：${stock}）。`);
  }

  console.log(`購入しました: ${itemInput} × ${quantity}`);
}

function onPurchase(
  itemInput: string,
  quantityInput: string,
  stock: number,
): void {
  try {
    purchase(itemInput, quantityInput, stock);
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error(error.message);
    } else {
      console.log("想定外のエラーが発生しました。");
    }
  } finally {
    console.log("購入処理が完了しました");
  }
}
onPurchase("りんご", "3", 10);
onPurchase("", "3", 10);
onPurchase("みかん", "0", 10);
onPurchase("ぶどう", "20", 5);
