import './style.css';

/**
 * 追加ボタン押下処理
 */
const onClickAdd = () => {
  // TODO入力テキストの取得
  const inputText = document.getElementById('add-text').value;
  // 入力値クリア
  document.getElementById('add-text').value = '';

  // TODO行作成
  createIncompleteTodo(inputText);
};

/**
 * TODO行作成関数
 */
const createIncompleteTodo = (todoText) => {
  // 追加対象のTODO行を生成する
  const li = document.createElement('li');
  // div
  const div = document.createElement('div');
  div.className = 'list-row';

  // TODOの名称テキスト
  const p = document.createElement('p');
  p.className = 'todo-item';
  p.innerText = todoText;

  // 完了ボタン
  const completeButton = document.createElement('button');
  completeButton.innerText = '完了';
  completeButton.addEventListener('click', () => {
    // 完了対象行
    const moveTarget = deleteButton.closest('li');
    completeButton.nextElementSibling.remove();
    completeButton.remove();
    // 戻すボタンを先に用意してあげる
    const backButton = document.createElement('button');
    backButton.innerText = '戻す';
    backButton.addEventListener('click', () => {
      const todoText = backButton.previousElementSibling.innerText;
      createIncompleteTodo(todoText);
      const deleteTarget = backButton.closest('li');
      deleteTarget.remove();
    });
    moveTarget.firstElementChild.appendChild(backButton);

    // 完了エリアに移動
    document.getElementById('complete-list').appendChild(moveTarget);
  });
  // 削除ボタン
  const deleteButton = document.createElement('button');
  deleteButton.innerText = '削除';
  deleteButton.addEventListener('click', () => {
    // 削除対象行
    const deleteTarget = deleteButton.closest('li');
    // 削除対象行を削除する
    document.getElementById('incomplete-list').removeChild(deleteTarget);
  });

  // リストに生成したTODO行を追加する
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
  document.getElementById('incomplete-list').appendChild(li);
};

// 追加ボタン押下時のイベント設定
document.getElementById('add-button').addEventListener('click', onClickAdd);
