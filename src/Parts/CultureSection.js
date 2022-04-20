import React from 'react';
import { Fade } from 'react-reveal';
import Button from "../Components/Button";

function CultureSection(props) {
    return (
        <div className="container pt-10 pb-32">
            {
                props.data.map((section, index) => {
                    return (
                        <div key={section.id}>
                            <Fade bottom cascade>
                                <h2 className="font-semibold text-xl mt-16">{section.title}</h2>
                                <div className="grid md:text-left md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-6">
                                    {section.data.map((item, index) => {
                                        return (
                                            <Button key={item.id} type="link" href={item.slug} className="mt-8 group">
                                                <img src={`/images/${item.img_url}`} alt=""
                                                    className="w-full md:h-64 lg:h-52 object-cover rounded-lg transition duration-500 group-hover:opacity-90 group-hover:shadow-2xl"/>
                                                <h5 className="font-medium text-lg text-secondary dark:text-blue-300 mt-5 group-hover:underline">
                                                    {item.title}
                                                </h5>
                                                <p className="text-sm mt-2 md:mt-1 leading-snug text-gray-500 dark:text-gray-300 font-light">{item.short_description}</p>
                                            </Button>
                                        )
                                    })}
                                </div>
                            </Fade>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default CultureSection;