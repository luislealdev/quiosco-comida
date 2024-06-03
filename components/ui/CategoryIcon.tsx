"use client"
import { Category } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useParams } from 'next/navigation'

type CategoryIconProps = {
    category: Category
}

export const CategoryIcon = ({ category }: CategoryIconProps) => {
    const params = useParams();

    return (
        <div>
            <div className={`${category.slug === params.category && 'bg-blue'} flex gap-15 align-center bold p-10 `}>
                <Image src={`/icon_${category.slug}.svg`} alt={category.name} width={64} height={64} />
                <Link className='black-text' href={`/order/${category.slug}`}>{category.name}</Link>
            </div>
            <hr />
        </div>
    )
}
