import React, { useState, useEffect, useRef } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
// import axios from 'axios';
import { NavbarCompStyle } from './styled';

const NavbarComp = ({
  handleActive
}) => {
  const handleClicked = (data) => {
    handleActive(data)
  }

  // Does not connect api becuase CORS
  const [list] = useState([
    {
      "sequenceNo": 1,
      "name": "Global Card",
      "code": "GCARD",
      "groups": [
        {
          "sequenceNo": 1,
          "name": "Credit Card Payment",
          "code": "CC",
          "details": {}
        }
      ]
    },
    {
      "sequenceNo": 2,
      "name": "Digital Payment",
      "code": "DPAY",
      "groups": [
        {
          "sequenceNo": 1,
          "name": "Wallet Payment",
          "code": "EWALLET",
          "details": {
            "totalChannel": 5,
            "name": "Wallet Payment",
            "channels": [
              {
                "sequenceNo": 2,
                "name": "Alipay",
                "iconUrl": "https://d27uu9vmlo4gwh.cloudfront.net/images/v4/images/icon/alipay.png",
                "logoUrl": "https://d27uu9vmlo4gwh.cloudfront.net/images/v4/images/logo/alipay.png",
                "payment": {
                  "code": {
                    "channelCode": "ALIPAY"
                  },
                  "input": {
                    "name": "O",
                    "email": "O",
                    "mobileNo": "I",
                    "accountNo": "I"
                  }
                },
                "isDown": false
              },
              {
                "sequenceNo": 3,
                "name": "Wechat Pay",
                "iconUrl": "https://d27uu9vmlo4gwh.cloudfront.net/images/v4/images/icon/wechat.png",
                "logoUrl": "https://d27uu9vmlo4gwh.cloudfront.net/images/v4/images/logo/wechat.png",
                "payment": {
                  "code": {
                    "channelCode": "WECHAT"
                  },
                  "input": {
                    "name": "O",
                    "email": "O",
                    "mobileNo": "I",
                    "accountNo": "I"
                  }
                },
                "isDown": false
              },
              {
                "sequenceNo": 7,
                "name": "Line Pay",
                "iconUrl": "https://d27uu9vmlo4gwh.cloudfront.net/images/v4/images/icon/line.png",
                "logoUrl": "https://d27uu9vmlo4gwh.cloudfront.net/images/v4/images/logo/line.png",
                "payment": {
                  "code": {
                    "channelCode": "LINE"
                  },
                  "input": {
                    "name": "O",
                    "email": "O",
                    "mobileNo": "O",
                    "accountNo": "I"
                  }
                },
                "isDown": false
              },
              {
                "sequenceNo": 9,
                "name": "TrueMoney",
                "iconUrl": "https://d27uu9vmlo4gwh.cloudfront.net/images/v4/images/icon/tmw.png",
                "logoUrl": "https://d27uu9vmlo4gwh.cloudfront.net/images/v4/images/logo/tmw.png",
                "payment": {
                  "code": {
                    "channelCode": "TRUEMONEY"
                  },
                  "input": {
                    "name": "O",
                    "email": "O",
                    "mobileNo": "M"
                  }
                },
                "isDown": false
              },
              {
                "sequenceNo": 1,
                "name": "ShopeePay",
                "iconUrl": "https://d27uu9vmlo4gwh.cloudfront.net/images/v4/images/icon/shppay.png",
                "logoUrl": "https://d27uu9vmlo4gwh.cloudfront.net/images/v4/images/logo/shppay.png",
                "payment": {
                  "code": {
                    "channelCode": "SHPPAY"
                  },
                  "input": {
                    "name": "O",
                    "email": "O",
                    "mobileNo": "O"
                  }
                },
                "isDown": false
              }
            ]
          }
        }
      ]
    },
  ]);

  // const fetchList = async () => {
  //   try {
  // await axios.get('https://pim-bo.preprod-dosa.decathlon.co.th/content/micro-services/payment-resp.json')
  //   .then((response) => {
  //     setList(response?.data.payload)
  //   })
  //   } catch (err) {
  //     throw err;
  //   }
  // }

  // useEffect(() => {
  //   fetchList();
  // }, [])

  return (
    <NavbarCompStyle>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Nav defaultActiveKey="/home" className="flex-column">
            {list &&
              list.map((data, i) => {
                return (
                  <div key={i} onClick={() => { handleClicked(data) }}>
                    <Nav href="#">{data.name}</Nav>
                    {/* <Navbar.Brand href="#">{data.name}</Navbar.Brand> */}
                  </div>
                )
              })}
            {/* <Navbar.Brand href="#" onClick={handleClicked(1)}></Navbar.Brand> */}
          </Nav>
        </Container>
      </Navbar>
    </NavbarCompStyle>
  )
}

export default NavbarComp