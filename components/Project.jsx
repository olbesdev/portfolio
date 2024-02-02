'use client'
import React, { Fragment } from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { FaWordpressSimple } from "react-icons/fa6";

const Project = ({site, title, company, date, description, website, imgUrl, technologies}) => {
    return (
        <section className="flex max-w-full">
            <Card className=" max-w-[600px] ">
                <CardHeader className="flex gap-3">
                    <Image
                        alt="logo develop"
                        height={60}
                        radius="sm"
                        src={imgUrl}
                        width={60}
                    />
                    <div className="flex flex-col">
                        <p className="text-md text-slate-100 font-semibold">{site}</p>
                        <p className="text-small text-default-500 text-slate-100">
                            {website}
                        </p>
                        <p className="text-xs text-slate-100">{date}</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p className="text-slate-100">
                        {description}
                    </p>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Link
                        isExternal
                        showAnchorIcon
                        href={website} className="text-slate-100 text-sm">
                        View site
                    </Link>
                </CardFooter>
            </Card>
        </section>
    );
  }


export default Project;
