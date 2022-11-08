import '../Pages/Resources/resources.css';

export const TableContainer = (props : any) => {

  // console.log(props.columns, props.data)

    return (
    <table className='users-table' >
        <thead>
            <tr className='resource-headers'>
            {props.columns.map((column : any) => <th>{column}</th>)}
            </tr>
        </thead>

        <tbody>
      {props.data.map((row : any) => <div>
      <tr className='resource-headers' >
          {props.columns.map((col : any) => <div><td>{row[col]}</td><td className='vertical-line'></td></div>
          )}
          </tr>
          <hr />
          </div>
              )
      }
        </tbody>
    </table>
    )
    }