import React from 'react'

const Footercard = (props) => {
    
  return (
    <>
        <div className="fcart">
            <h3>{props.footerApi.header.firstheader}</h3>

            <ul>
                {
                    props.footerApi.firstlist.map((item,key)=>{
                        return(
                            <li key={key}>
                                <a href="#">{item.name}</a>
                            </li>
                        )
                    })
                }
               
            </ul>
        </div>
    </>
  )
}

export default Footercard