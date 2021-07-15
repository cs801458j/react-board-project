
function ProductList() {
    const todos = [
        { id: 1, pw: '1234', name: 'JUST' },
        { id: 2, pw: '1234', name: 'DO' },
        { id: 3, pw: '1234', name: 'IT' }
      ];

    const items = todos.map((todo) => <li>{todo.id},{todo.name}</li>);

    return (
        <div>
            <p>productList</p>
            <div>
                <ul>{items}</ul>
            </div>
        </div>
    )
}

export default ProductList;
//https://medium.com/humanscape-tech/%EC%8A%AC%EC%8A%AC-hooks%EB%A1%9C-%EC%9D%B4%EC%82%AC-%EA%B0%80%EC%85%94%EC%95%BC%EC%A3%A0-34be22e2962f