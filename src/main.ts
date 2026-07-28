class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

// 奥のロジック：不正ならガード節で早めにthrow
function registerUser(nameInput: string, emailInput: string): void {
  const name = nameInput.trim();
  if (name.length === 0) {
    throw new ValidationError("名前を入力してください。");
  }

  const email = emailInput.trim();
  // TODO(Step 1): メールアドレスの形式チェックをここに追加する

  console.log(`登録しました: ${name} <${email}>`);
}

// 画面に近い側：catchしてユーザーに伝える
function onSubmit(nameInput: string, emailInput: string): void {
  try {
    registerUser(nameInput, emailInput);
  } catch (error: unknown) {
    if (error instanceof ValidationError) {
      console.error(`⚠️ ${error.message}`);
    } else {
      console.error("想定外のエラーが発生しました。", error);
    }
  }
}

onSubmit("Alice", "alice@example.com");
onSubmit("Bob", "invalid-email");
onSubmit("", "carol@example.com");
onSubmit("Charlie", "alice@example.com");
