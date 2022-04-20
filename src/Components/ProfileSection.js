import React from 'react';
import { Fade } from 'react-reveal';
import Button from "./Button";

function ProfileSection(props) {
    return (
        <div className="container">
            <div className="mt-8 md:mt-12 lg:mt-20 max-w-lg mx-auto lg:max-w-full lg:grid lg:grid-cols-12">
                <div className="mb-14 lg:mb-0 lg:col-span-5 md:pr-12 xl:pr-32">
                    <h2 className="text-2xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-secondary dark:text-blue-300 leading-normal">The creative people behind <span
                        className="text-primary dark:text-red-300 leading-normal">Bali Province</span>.
                    </h2>

                    <div className="mt-10">
                        <h3 className="md:text-2xl lg:text-lg xl:text-xl font-semibold text-secondary dark:text-blue-300">Our Main Goals</h3>
                        <p className="text-gray-600 dark:text-gray-200 font-light mt-3 text-sm llg:text-sm">Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Adipisci aliquam distinctio eaque esse
                            fugiat illum in, ipsam iste iusto laboriosam magnam nam nisi odit omnis quaerat quos
                            repellendus
                            reprehenderit sint.</p>
                    </div>

                    <div className="mt-10">
                        <h3 className="md:text-2xl lg:text-lg xl:text-xl font-semibold text-secondary dark:text-blue-300">How to Support Us</h3>
                        <p className="text-gray-600 dark:text-gray-200 font-light mt-3 text-sm lg:text-sm">Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Beatae iure quasi vero voluptatum. Beatae inventore neque nostrum numquam
                            tempore vero!</p>
                    </div>
                </div>
                <div className="lg:col-span-7">
                    <Fade bottom cascade>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {props.data.map((profile, index) => {
                                return (
                                    <Button key={profile.id} isExternal type="link" href={profile.link} className="mb-5 group">
                                        <img src={`/images/${profile.image_url}`} alt={profile.name}
                                            className="object-cover transition group-hover:opacity-80 group-hover:-translate-y-4 group-hover:shadow-xl ease-out"/>
                                        <div className="text-center mt-3">
                                            <h5 className="text-sm xl:text-base text-secondary dark:text-blue-300 font-medium group-hover:underline">{profile.name}</h5>
                                            <p className="xl:text-base text-gray-600 dark:text-gray-200 text-sm mt-1">{profile.title}</p>
                                        </div>
                                    </Button>
                                )
                            })}
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default ProfileSection;