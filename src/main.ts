function fetchNumber(): Promise<number> {
  // TODO: 1秒後に 42 を resolve する Promise を返す
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(42);
      reject();
    }, 1000);
  });
}

// TODO: fetchNumber() を呼び、.then で受け取って表示する
fetchNumber()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

console.log("待機中に別の処理が出来ます");

// 成功か失敗かを、引数で切り替えられるようにする
function fetchUserData(shouldFail: boolean): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // TODO 1: shouldFail が true なら reject、false なら resolve
      if (shouldFail == false) {
        resolve("OK");
      } else {
        reject("サーバーエラー");
      }
    }, 1000);
  });
}

// TODO 2: async を付ける
async function main(shouldFail: boolean): Promise<void> {
  // TODO 3: try-catch の中で await する
  try {
    //   成功 → 受け取った文字列を表示
    const data = await fetchUserData(shouldFail);
    console.log(data);
  } catch (error) {
    //   失敗 → `NG: ${error}` の形で表示
    console.log(`NG: ${error}`);
  }
}

main(false); // 成功パターン
main(true); // 失敗パターン

async function task1(): Promise<string> {
  // 0.5秒後に A を返す
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("A");
    }, 500);
  });
}

async function task2(): Promise<string> {
  // 0.5秒後に B を返す
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("B");
    }, 500);
  });
}

async function task3(): Promise<string> {
  // 0.5秒後に C を返す
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("C");
    }, 500);
  });
}

async function runTasksInOrder(): Promise<void> {
  // task1 -> task2 -> task3 の順で実行する
  const a = await task1();
  const b = await task2();
  const c = await task3();
  // それぞれの結果を連結し、 A-B-C というログを出力する
  console.log(`${a}-${b}-${c}`);
}

runTasksInOrder();
