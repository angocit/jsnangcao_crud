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
    await fetch('http://localhost:3000/products',{
        method:'POST',
        body: JSON.stringify({name:name,image:image,cat_id:cat_id,description:description,price:price})
    });
    // Thêm thành công.
    // console.log(response);
    // sau khi thêm thành công thì load lại dữ liệu
    renderProduct();
}
// Viêt hàm hiển thị
const renderProduct = async()=>{
    // Để lấy được dữ liệu => Call API bằng fetch với phương thúc GET
    let response = await fetch('http://localhost:3000/products'); // trả về promise=> sử dụng async/await để xử lý
    let product = await response.json(); // 
    console.log(product);
    // console.log(product);
    // Có dữ liệu rồi thì đổ vào vị trí tbody
    // - truy cập đến vị trí tbody
    const tbody = document.querySelector('tbody');
    // Chuyển tbody về dữ liệu trống nếu không mỗi lần render nó sẽ đổ thêm dữ liệu vào=> trùng nhau.
    tbody.innerHTML='';
    // - Duyệt mảng
    product.map((value,index)=>{
        // Khởi tạo thẻ tr chứa thông tin sản phẩm.
        const tr = document.createElement('tr');
        // gán dữ liệu sản phẩm vào tr.
        tr.innerHTML = `
            <td>${index+1}</td>
            <td><img width="60" src="${value.image}"></td>
            <td>${value.name}</td>
            <td>${value.cat_id}</td>
            <td>${value.price}</td>
            <td><a class="btn btn-primary">Sửa</a> <a class="btn btn-danger">Xóa</a></td>
        `;
        // Đổ tr và tbody
        tbody.appendChild(tr);
    });
}
renderProduct();