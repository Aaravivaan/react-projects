import React from 'react'
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components'

import { Button } from '../utilities/Button';

import { useGlobalContext } from '../context';

const HeroSection = ({heroData}) => {

    const name = useGlobalContext();

    const Wrapper = styled.section`
        padding:9rem 0;

        .hero-content{
            display:flex;
            flex-direction:column;
            justify-content:center;
        }

        .btn {
            max-width:16rem;
        }

        .hero-top-content{
            text-transform:uppercase;
            font-weight:500;
            font-size:1.5rem;
            color:${({theme})=>theme.colors.helper};
        }

        .hero-heading{
            text-transform:uppercase;
            font-size:6.4rem;
        }

        .hero-para{
            margin-top:1.5rem;
            margin-bottom:3rem;
            margin-button:3.4rem;
            max-width:60rem;
        }

        .hero-img-section{
            display:flex;
            justify-content:center;
            align-items:center;
        }

        picture{
            text-align:center;
        }

        .hero-img{
            max-width:70%;
        }
    `;
  return (
    <Wrapper>
        <div className="container grid grid-col-2">
            <div className="hero-content">
                <p className='hero-top-content'>{heroData.topPara} — {name}</p>
                <h1 className='hero-heading'>{heroData.heading}</h1>
                <p className='hero-para'>{heroData.paragraph}</p>
                <Button className="btn btn-hireme">
                    <NavLink to="/contact">{heroData.btnText}</NavLink>
                </Button>
            </div>
            <div className="hero-img-section">
                <picture>
                    <img className='hero-img' src={"./images/"+heroData.imageName} alt="Home" />
                </picture>
            </div>
        </div>
    </Wrapper>
  )
}

export default HeroSection