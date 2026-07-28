class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// 登録されているメールアドレス一覧
const emails = new Set<string>();
const userEmail = new Map<string, string>();

// 奥のロジック：不正ならガード節で早めにthrow
function registerUser(nameInput: string, emailInput: string): void {
  const name = nameInput.trim();
  if (name.length === 0) {
    throw new ValidationError("名前を入力してください。");
  }

  const email = emailInput.trim();
  // TODO(Step 1): メールアドレスの形式チェックをここに追加する
  if (!pattern.test(email)) {
    throw new ValidationError("メールアドレスの形式が正しくありません。");
  }

  // 重複の有無
  if (emails.has(email)) {
    throw new ValidationError("このメールアドレスは既に登録されています。");
  }

  emails.add(email);

  userEmail.set(email, name);

  const registeredDate = new Date();
  console.log(
    `登録しました: ${name} <${email}> (${registeredDate.toDateString()})`,
  );
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

console.log("登録者一覧");
// 登録者一覧をログに表示
for (const [email, name] of userEmail) {
  console.log(`${name} <${email}>`);
}
// 合計人数をログに表示
console.log(`合計人数：${userEmail.size}人`);
