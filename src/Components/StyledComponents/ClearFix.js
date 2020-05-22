import styled from "styled-components";

export default styled.div`
zoom: 1
&::after {
content: '.';
clear: both;
display: block;
height: 0;
visibility: hidden;
}

`
