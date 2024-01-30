const pushDataToInput = async()=>{
    // Để lấy được dữ liệu thì phải dựa vào id trên url.
    // -> Lấy id từ url
    const params = new URLSearchParams(location.search);
    const id = params.get('id'); 
    // console.log(id);
    // lấy đc id rồi thì gọi api với phương thức get để lấy thông tin sản phẩm
    const response = await fetch(`http://localhost:3000/products/${id}`);
    const product = await response.json();
    // console.log(product);
    // Lấy đc sản phẩm rồi -> đổ dữ liệu vào ô input

    // -> Truy cập đến từng ô input để đổ
    document.getElementById('id').value = product.id;
    document.getElementById('tensp').value = product.name;
    document.getElementById('anhsp').value = product.image;
    document.getElementById('danhmuc').value = product.cat_id;
    document.getElementById('gia').value = product.price;
    document.getElementById('mota').value = product.description;
}
const UpdateProduct=()=>{
    event.preventDefault();
    // Lấy dữ liệu từ ô input
    let id = document.getElementById("id").value;
    let name = document.getElementById("tensp").value;
    let image = document.getElementById("anhsp").value;
    let cat_id = document.getElementById("danhmuc").value;
    let price = document.getElementById("gia").value;
    let description = document.getElementById("mota").value;
    // Lấy dữ liệu xong thì gọi api update thông qua phương thức PUT của jsonserver
    fetch(`http://localhost:3000/products/${id}`,{
        method:'PUT',
        body: JSON.stringify({name:name,image:image,cat_id:cat_id,description:description,price:price})
    });
}
pushDataToInput();