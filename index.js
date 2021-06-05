// Bài 1: In ra thứ tự tăng dần các số
/**
 * b1: Input
 * - num1, num2, num3
 *
 * b2: Handle
 * - Tạo biến num1, num2, num3, ketQua1
 * - Tìm thứ tự tăng dần các số
 *
 * b3: Output
 * - Xuất ra thứ tự tăng dần các số
 */
var btn1 = document.getElementById('btn1');

btn1.onclick = function () {
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;
  var num3 = document.getElementById('num3').value;
  var max = num1;
  var min = num1;
  var left;
  if (max < num2) {
    max = num2;
  }
  if (max < num3) {
    max = num3;
  }
  if (min > num2) {
    min = num2;
  }
  if (min < num3) {
    min = num3;
  }
  left = num1 * 1 + num2 * 1 + num3 * 1 - max * 1 - min * 1;

  var ketQua1 = document.getElementById('ketqua1');
  ketQua1.innerHTML = `${min} => ${left} => ${max}`;
};

// Bài 2: Chào hỏi
/**
 * b1: Input
 * - thanhVien
 *
 * b2: Handle
 * - Tạo biến thanhVien, ketQua2
 * - Tìm câu chào phù hợp
 *
 * b3: Output
 * - Xuất ra câu chào phù hợp
 */
document.getElementById('btn2').onclick = function () {
  var thanhVien = document.getElementById('thanhVien').value;
  var ketQua2 = document.getElementById('ketqua2');
  if (thanhVien == 'M') {
    ketQua2.innerHTML = 'Chào Mẹ';
    console.log('M');
  } else if (thanhVien === 'B') {
    ketQua2.innerHTML = 'Chào Bố';
  } else if (thanhVien === 'A') {
    ketQua2.innerHTML = 'Chào Anh Trai';
  } else if (thanhVien === 'E') {
    ketQua2.innerHTML = 'Chào Em Gái';
  } else {
    ketQua2.innerHTML = '';
  }
};

// Bài 3: Tìm bao nhiêu số chẵn, bao nhiêu số lẻ
/**
 * b1: Input
 * - num4, num5, num6
 *
 * b2: Handle
 * - Tạo biến num4, num5, num6
 * - Tìm ra bao nhiều số lẻ và số chẵn
 *
 * b3: Output
 * - Xuất ra số số lẻ và số số chẵn
 */
document.getElementById('btn3').onclick = function () {
  var num4 = document.getElementById('num4').value;
  var num5 = document.getElementById('num5').value;
  var num6 = document.getElementById('num6').value;
  var soLe = 0;
  var soChan = 0;

  if (num4 % 2 === 0) {
    soChan++;
  } else {
    soLe++;
  }
  if (num5 % 2 === 0) {
    soChan++;
  } else {
    soLe++;
  }
  if (num6 % 2 === 0) {
    soChan++;
  } else {
    soLe++;
  }
  document.getElementById(
    'ketqua3'
  ).innerHTML = `Số lẻ: ${soLe}, Số Chẵn: ${soChan}`;
};
// Bài 4: Xác định 3 cạnh nhập vào là tam giác gì
/**
 * b1: Input
 * - canh1, canh2, canh3
 *
 * b2: Handle
 * - Tạo biến canh1, canh2, canh3, ketQua4
 * - Tìm ra 3 cạnh nhập vào là 3 cạnh của tam giác gì
 *
 * b3: Output
 * - Xuất tên loại tam giác đó
 */
document.getElementById('btn4').onclick = function () {
  var canh1 = document.getElementById('canh1').value;
  var canh2 = document.getElementById('canh2').value;
  var canh3 = document.getElementById('canh3').value;
  var ketQua4 = document.getElementById('ketqua4');
  if (
    canh1 * canh1 == canh2 * canh2 + canh3 * canh3 ||
    canh2 * canh2 == canh3 * canh3 + canh1 * canh1 ||
    canh3 * canh3 == canh1 * canh1 + canh2 * canh2
  ) {
    if (canh1 == canh2 || canh1 == canh3 || canh2 == canh3) {
      ketQua4.innerHTML = 'Tam giác vuông cân';
    } else {
      ketQua4.innerHTML = 'Tam giác vuông';
    }
  } else if (canh1 == canh2 && canh2 == canh3) {
    ketQua4.innerHTML = 'Tam giác đều';
  } else if (canh1 == canh2 || canh1 == canh3 || canh2 == canh3) {
    ketQua4.innerHTML = 'Tam giác cân';
  } else {
    ketQua4.innerHTML = 'Tam giác thường';
  }
};
