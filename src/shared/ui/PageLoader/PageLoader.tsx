import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss'
interface PageLoaderProps {
    className?: string;
}

const PageLoader = ({className}: PageLoaderProps) => {
  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <div className={cls.loader}></div>
    </div>
  )
}

export default PageLoader