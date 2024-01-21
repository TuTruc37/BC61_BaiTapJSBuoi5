// Bài tập 1: Quản lý tuyển sinh

document.getElementById("btn-kq1").onclick = function () {
  var diemChuan = document.getElementById("txt-diemChuan").value * 1;
  var diemMonThu1 = document.getElementById("txt-diemMonThu1").value * 1;
  var diemMonThu2 = document.getElementById("txt-diemMonThu2").value * 1;
  var diemMonThu3 = document.getElementById("txt-diemMonThu3").value * 1;

  var khuVuc = document.getElementById("select-khuVuc").value * 1;
  khuVuc.onchange = function () {
    console.log(khuVuc);
  };

  var doiTuong = document.getElementById("select-doiTuong").value * 1;
  doiTuong.onchange = function () {
    console.log(doiTuong);
  };
  var diem = diemMonThu1 + diemMonThu2 + diemMonThu3 + khuVuc + doiTuong;
  if (diemMonThu1 <= 0 || diemMonThu2 <= 0 || diemMonThu3 <= 0) {
    document.getElementById(
      "ketQua1"
    ).innerHTML = `Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0;`;
  } else if (diem >= diemChuan) {
    document.getElementById(
      "ketQua1"
    ).innerHTML = `Bạn đã đậu. Tổng điểm: ${diem}`;
  } else {
    document.getElementById(
      "ketQua1"
    ).innerHTML = `Bạn đã rớt. Tổng điểm: ${diem}`;
  }
};
//Bài tập 2: Tính tiền điện
const TIEN_50KW_DAU = 500;
const TIEN_50KW_KE = 650;
const TIEN_100KW_KE = 850;
const TIEN_150KW_KE = 1100;
const TIEN_CON_LAI = 1300;
document.getElementById("btn-kq2").onclick = function () {
  var hoTen = document.getElementById("txt-hoTen").value;
  var soKW = document.getElementById("txt-soKW").value * 1;
  var tienDien = 0;
  if (soKW >= 0 && soKW <= 50) {
    tienDien = soKW * TIEN_50KW_DAU;
  } else if (soKW > 50 && soKW <= 100) {
    tienDien = TIEN_50KW_DAU * 50 + (soKW - 50) * TIEN_50KW_KE;
  } else if (soKW > 100 && soKW <= 200) {
    tienDien =
      TIEN_50KW_DAU * 50 + TIEN_50KW_KE * 50 + (soKW - 100) * TIEN_100KW_KE;
  } else if (soKW > 200 && soKW <= 350) {
    tienDien =
      TIEN_50KW_DAU * 50 +
      TIEN_50KW_KE * 50 +
      TIEN_100KW_KE * 100 +
      (soKW - 200) * TIEN_150KW_KE;
  } else {
    tienDien =
      TIEN_50KW_DAU * 50 +
      TIEN_50KW_KE * 50 +
      TIEN_100KW_KE * 100 +
      TIEN_150KW_KE * 150 +
      (soKW - 350) * TIEN_CON_LAI;
  }
  var formatTienDien = new Intl.NumberFormat("vn-VN").format(tienDien);
  document.getElementById(
    "ketQua2"
  ).innerHTML = `Họ tên: ${hoTen}; Tiền điện: ${formatTienDien}`;
};

//Bài tập 3: Tính thuế thu nhập cá nhân
const DEN_60 = 0.05;
const TREN_60_DEN_120 = 0.1;
const TREN_120_DEN_210 = 0.15;
const TREN_210_DEN_384 = 0.2;
const TREN_384_DEN_624 = 0.25;
const TREN_624_DEN_960 = 0.3;
const TREN_960 = 0.35;

document.getElementById("btn-kq3").onclick = function () {
  var hoTen1 = document.getElementById("txt-hoTen1").value;
  var tongThuNhapNam = document.getElementById("txt-thuNhapNam").value * 1;
  var soNguoiPhuThuoc =
    document.getElementById("txt-soNguoiPhuThuoc").value * 1;
  var tong = 0;
  var thuNhapChiuThue = tongThuNhapNam - 4e6 - soNguoiPhuThuoc * 1.6e6;
  console.log(thuNhapChiuThue);
  if (thuNhapChiuThue <= 60e6) {
    tong = thuNhapChiuThue * DEN_60;
    console.log(tong);
  } else if (thuNhapChiuThue > 60e6 && thuNhapChiuThue <= 120e6) {
    tong = thuNhapChiuThue * TREN_60_DEN_120;
    console.log(tong);
  } else if (thuNhapChiuThue > 120e6 && thuNhapChiuThue <= 210e6) {
    tong = thuNhapChiuThue * TREN_120_DEN_210;
    console.log(tong);
  } else if (thuNhapChiuThue > 210e6 && thuNhapChiuThue <= 384e6) {
    tong = thuNhapChiuThue * TREN_210_DEN_384;
    console.log(tong);
  } else if (thuNhapChiuThue > 384e6 && thuNhapChiuThue <= 624e6) {
    tong = thuNhapChiuThue * TREN_384_DEN_624;
    console.log(tong);
  } else if (thuNhapChiuThue > 624e6 && thuNhapChiuThue <= 960e6) {
    tong = thuNhapChiuThue * TREN_624_DEN_960;
    console.log(tong);
  } else {
    tong = thuNhapChiuThue * TREN_960;
    console.log(tong);
  }
  var formatTienThue = new Intl.NumberFormat("vn-VN").format(tong);
  document.getElementById(
    "ketQua3"
  ).innerHTML = `Họ tên: ${hoTen1}; Tiền thuế thu nhập cá nhân: ${formatTienThue} VND`;
};
//Bài tập 4: Tính tiền cáp
const NHA_DAN = "nhaDan";
const DOANH_NGHIEP = "doanhNghiep";
// DOM tới giá trị (value) của thẻ input
// var soKetNoi = document.getElementById("txt-soKetNoi").value * 1;

// DOM đến thẻ input
var theSoKetNoi = document.getElementById("txt-soKetNoi");
var chonLoaiKH = document.getElementById("select-loaiKH");
// console.log(chonLoaiKH);
//Dom tới thẻ mới dùng onclick, onchange đc nha, nãy em Dom tới value của thẻ là ko chạy function đc
// Phân biệt đc dom thẻ && dom value thẻ chưa nè
theSoKetNoi.style.display = "none";
chonLoaiKH.onchange = function () {
  // console.log(chonLoaiKH.value);

  if (chonLoaiKH.value == DOANH_NGHIEP) {
    theSoKetNoi.style.display = "block";
  } else {
    theSoKetNoi.style.display = "none";
  }
};

document.getElementById("btn-kq4").onclick = function () {
  var soKetNoi = document.getElementById("txt-soKetNoi").value * 1;
  var maKhachHang = document.getElementById("txt-maKhachHang").value;
  var soKenh = document.getElementById("txt-kenhCaoCap").value * 1;

  var tongTienCap = 0;
  var phiXuLyHoaDon = PhiXuLyHoaDon(chonLoaiKH.value);
  var phiDichVuCoBan = PhiDichVuCoBan(chonLoaiKH.value);
  var thueKenhCaoCap = ThueKenhCaoCap(chonLoaiKH.value);
  if (chonLoaiKH.value == NHA_DAN) {
    tongTienCap = phiXuLyHoaDon + phiDichVuCoBan + soKenh * thueKenhCaoCap;
  } else {
    tongTienCap = phiXuLyHoaDon + phiDichVuCoBan + soKenh * thueKenhCaoCap;
    if (soKetNoi > 10) {
      tongTienCap += (soKetNoi - 10) * 5;
    }
  }
  var formatTienCap = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(tongTienCap);
  document.getElementById(
    "ketQua4"
  ).innerHTML = `Mã khách hàng: ${maKhachHang}; Tiền cáp: ${formatTienCap}`;
};
function PhiXuLyHoaDon(chonLoaiKH) {
  switch (chonLoaiKH) {
    case NHA_DAN:
      return 4.5;
    default:
      return 15;
  }
}
function PhiDichVuCoBan(chonLoaiKH) {
  switch (chonLoaiKH) {
    case NHA_DAN:
      return 20.5;
    default:
      return 75;
  }
}
function ThueKenhCaoCap(chonLoaiKH) {
  switch (chonLoaiKH) {
    case NHA_DAN:
      return 7.5;
    default:
      return 50;
  }
}
