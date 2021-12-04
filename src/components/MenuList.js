import React from 'react'

export default function MenuList({item}) {
    return (
        <li>
            <a href="#">
                <p> { item.name } </p>
                <img src={ item.icon } alt="" />
            </a>
        </li>
    )
}
