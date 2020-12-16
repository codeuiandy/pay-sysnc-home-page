import React from 'react';
import Layout from './index';
import image1 from '../../assets/Component 4 – 1.svg';
import image2 from '../../assets/Rectangle 475.svg';
import image3 from '../../assets/Rectangle 479.svg';
import { GridBlog } from './GridBlog';

const AllBlogs = () => {
    const blogData = [
        {
            image: image2,
            title: "CFPB Recognizes Earned Wages Access As Short Term Liquidity Solution",
            content: "On demand provides choice and flexiblility for the American worker, and provides them with the opportunity to save and invest",
            date: "December 01, 2020",
        },
        {
            image: image3,
            title: "Giving Thanks... To You",
            content: "We are nothing without our users. You are the ones who define us, and completes us",
            date: "December 01, 2020",
        },
        {
            image: image1,
            title: "How Earned Wage Access Can Reduce Student Loan Burden",
            content: "If you are having trouble with a student loan payment, accessing your earned wages through a partnership between your employer and PaySync can help",
            date: "December 01, 2020",
        },
        {
            image: image2,
            title: "CFPB Recognizes Earned Wages Access As Short Term Liquidity Solution",
            content: "On demand provides choice and flexiblility for the American worker, and provides them with the opportunity to save and invest",
            date: "December 01, 2020",
        },
        {
            image: image3,
            title: "Giving Thanks... To You",
            content: "We are nothing without our users. You are the ones who define us, and completes us",
            date: "December 01, 2020",
        },
        {
            image: image1,
            title: "How Earned Wage Access Can Reduce Student Loan Burden",
            content: "If you are having trouble with a student loan payment, accessing your earned wages through a partnership between your employer and PaySync can help",
            date: "December 01, 2020",
        },
        {
            image: image2,
            title: "CFPB Recognizes Earned Wages Access As Short Term Liquidity Solution",
            content: "On demand provides choice and flexiblility for the American worker, and provides them with the opportunity to save and invest",
            date: "December 01, 2020",
        },
        {
            image: image3,
            title: "Giving Thanks... To You",
            content: "We are nothing without our users. You are the ones who define us, and completes us",
            date: "December 01, 2020",
        },
        {
            image: image1,
            title: "How Earned Wage Access Can Reduce Student Loan Burden",
            content: "If you are having trouble with a student loan payment, accessing your earned wages through a partnership between your employer and PaySync can help",
            date: "December 01, 2020",
        },
    ];
    return (
        <Layout>
            {
                blogData.map((item, index) => <GridBlog
                    key={index}
                    image={item.image}
                    title={item.title}
                    content={item.content}
                    date={item.date}
                />
                )
            }
        </Layout>
    )
}

export default AllBlogs
