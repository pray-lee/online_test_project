export default function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", 'i'); // 匹配目标参数
  var result = window.location.search.substr(1).match(reg); // 对querystring匹配目标参数
  if (result != null) {
    return decodeURIComponent(result[2]);
  } else {
    return null;
  }
}
