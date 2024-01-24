import Table from "./Table"
function Name() {

  // const hanldeSorting = () => {
  //   setData(()=> {
  //     const data1 = [...data].sort((a, b) => (a.points < b.points ? -1 : 1));
  // console.log('sorting',data1);
  // setData(data1)
  //   });
  // }

    return (
     <div>
      <div className="text-center buttons">
          <Table sortOrder="name"></Table>
        </div>
     </div>
    );
  }
  
  export default Name;
  