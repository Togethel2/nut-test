import React from 'react';
import { HeaderStyled } from './styled';

const Header = () => {
  return (
    <HeaderStyled>
      <div class="container--flex">
        <div class="flex-child">
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />
        </div>
        <div class="flex-child">
          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
        </div>
        <div class="flex-child submit">
          <input type="submit" value="Connect" />
        </div>
      </div>
    </HeaderStyled>
  )
}

export default Header;