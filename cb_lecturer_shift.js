
const  tableoutput = () => {
  
    let num = 5; //講師人数

    let result = '<table border = 1><tr><th>講師名</th><th>後期通常</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th></tr>';
  
    for (let i = 0; i < num; i++) {
      result += '<tr><td rowspan = 4>' + '講師名' + '</td>';
      for(let m = 0; m < 4; m++){
        if(m != 0){
            result += '<tr>';
        }
        result += '<td>' + (17+m) + ':' + m + '0~</td>';
        for(let n = 0; n < 6; n++){
            // チェックボックスを追加
            result += '<td><input type="checkbox" id="cell_' + i + '_' + m + '_' + n + '"></td>';
        }
        result += '</tr>'
      }
    }
    result += '</table>';

    document.getElementById('table').innerHTML = result;

  // チェックボックスのイベントリスナーを追加
  for (let i = 0; i < num; i++) {
    for (let m = 0; m < 4; m++) {
        for (let n = 0; n < 6; n++) {
            const checkbox = document.getElementById('cell_' + i + '_' + m + '_' + n);
            checkbox.addEventListener('change', function() {
                // チェックボックスの状態が変化したときの処理をここに書く
                if (this.checked) {
                    // チェックされた場合の処理
                    console.log('チェックされました:', i, m, n);
                    // ここでチェックされた情報を保存したり、他の処理を実行したりできます
                } else {
                    // チェックが外された場合の処理
                    console.log('チェックが外されました:', i, m, n);
                }
            });
        }
    }
}
}

  document.addEventListener("DOMContentLoaded", function() {
    tableoutput();

});