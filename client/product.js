const addProduct=async ()=>{
    event.preventDefault(); // Ngăn trình duyệt chuyển hướng
    // Lấy dữ liệu từ ô input.
    let name = document.getElementById("tensp").value;
    let image = document.getElementById("anhsp").value;
    let cat_id = document.getElementById("danhmuc").value;
    let price = document.getElementById("gia").value;
    let description = document.getElementById("mota").value;

    // Sau khi gán giá trị xong thì in ra thử xem đúng chưa.
    // console.log(name,image,price,description,cat_id);

    //Kiểm tra lấy thành công thì đổ dữ liệu vào database.
    // sử dụng fetch để gửi dữ liệu qua phương thức post lên api json-server
    // fetch trả về promise nên chúng ta sẽ sử dụng async/await để xử lý/
    let response = await fetch('http://localhost:3000/products',{
        method:'POST',
        body: JSON.stringify({name:name,image:image,cat_id:cat_id,description:description,price:price})
    });
    // Thêm thành công.
    // console.log(response);
}