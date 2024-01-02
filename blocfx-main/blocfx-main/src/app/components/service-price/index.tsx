import React, { Fragment } from "react";
import { betaPricingPackageInfo, betaPricingPackageSections, betaPricingPackageTiers } from "../../../../utils/CONSTANTS";
import { cn } from "../../../../lib/utils";
import { ButtonWithIcon } from "../ui/button";
import Image from "next/image";

import BrandingIcon from '../../../../public/icons/branding-icon.svg'

export default function ServicePriceSection() {

    return (
        <div className="isolate h-full bg-white -mt-20 lg:-mt-10 pt-10 md:pt-20 pb-[8.5rem] ">
            <div className="mx-auto max-w-[83rem]  flex justify-center items-center flex-col gap-24">

                <div className='grid  md:max-w-xl space-y-5 px-9 md:px-0 text-center'>
                    <h1 className='text-3xl md:text-4xl font-cenios'>         {betaPricingPackageInfo.title}</h1>
                    <p className='font-aktifoa'>
                        {betaPricingPackageInfo.description}
                    </p>
                </div>

                {/* lg+ */}
                <div className="isolate block bg-gray-50 p-0 md:p-5 md:px-14 ">
                    <div className="relative md:-mx-8">
                        {betaPricingPackageTiers.some((tier) => tier.mostPopular) ? (
                            <div className="absolute inset-x-4 -bottom-12 -top-12 -z-10 flex">
                                <div
                                    className={`flex sm:hidden w-[5.5rem] px-4‍‍`}
                                    aria-hidden="true"
                                    style={{
                                        marginLeft: `${(betaPricingPackageTiers.findIndex(
                                            (tier) => tier.mostPopular
                                        ) +
                                            1) *
                                            51
                                            }%`,
                                    }}
                                >
                                    <div className="w-full  gradient-background" />
                                </div>
                                <div
                                    className={`hidden sm:flex md:hidden w-[5.5rem] px-4‍‍`}
                                    aria-hidden="true"
                                    style={{
                                        marginLeft: `${(betaPricingPackageTiers.findIndex(
                                            (tier) => tier.mostPopular
                                        ) +
                                            1) *
                                            55
                                            }%`,
                                    }}
                                >
                                    <div className="w-full  gradient-background" />
                                </div>

                                <div
                                    className={`hidden md:flex w-40 px-4‍‍`}
                                    aria-hidden="true"
                                    style={{
                                        marginLeft: `${(betaPricingPackageTiers.findIndex(
                                            (tier) => tier.mostPopular
                                        ) +
                                            1) *
                                            55.5
                                            }%`,
                                    }}
                                >
                                    <div className="w-full  gradient-background" />
                                </div>
                            </div>
                        ) : null}
                        <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
                            <caption className="sr-only">Pricing plan comparison</caption>
                            <colgroup>
                                <col className="w-[60%]" />
                                <col className="" />
                                <col className="" />
                            </colgroup>
                            <tbody>
                                {betaPricingPackageSections.map((section, sectionIdx) => (
                                    <Fragment key={section.name}>
                                        <tr className="text-bold ">
                                            <th
                                                scope="colgroup"
                                                className={cn(
                                                    sectionIdx === 0 ? "pt-0" : "pt-4",
                                                    "pb-4 text-sm md:text-base font-bold leading-6"
                                                )}
                                            >
                                                {section.name}
                                                <div className="absolute inset-x-8 mt-4 h-px gradient-background" />
                                            </th>
                                            {sectionIdx === 0 && betaPricingPackageTiers.map((tier) => (

                                                <th key={tier.id} className="text-sm  md:text-base font-bold leading-6 pb-4" >
                                                    {tier.title === 'Bloc Fx' ? (
                                                        <>
                                                            <Image
                                                                src={BrandingIcon}
                                                                alt="BlocFx"
                                                                height={60}
                                                                className="md:flex -mt-10 ml-0  lg:ml-2 hidden"
                                                                loading='lazy'
                                                            />
                                                            <Image
                                                                src={BrandingIcon}
                                                                alt="BlocFx"
                                                                height={50}
                                                                className="md:hidden -mt-10 ml-1"
                                                                loading='lazy'
                                                            />
                                                        </>
                                                    ) : tier?.title}
                                                </th>
                                            ))}
                                        </tr>



                                        {section.features.map((feature: any) => (
                                            <tr key={feature.name}>
                                                <th
                                                    scope="row"
                                                    className="py-4 text-xs sm:text-sm font-normal leading-6 font-aktifoa-light pr-5"
                                                >
                                                    {feature.name}
                                                    <div className="absolute inset-x-8 mt-4 h-px bg-[#BCBCBB]" />
                                                </th>
                                                {betaPricingPackageTiers.map((tier) => (
                                                    <td key={tier.id} className="px-6 py-4 xl:px-8">

                                                        {feature.tiers[tier.name] === true ? (
                                                            <span className="-ml-4 md:-ml-4 text-xs sm:text-sm font-normal leading-6 font-aktifoa-light">{feature?.tiers_hint_blocFx}</span>
                                                        ) : (
                                                            <span className="text-xs sm:text-sm -ml-4 md:ml-0 font-normal leading-6 font-aktifoa-light">{feature?.tiers_hint_traditional}</span>
                                                        )}

                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </Fragment>
                                ))}
                            </tbody>
                        </table>
                        <p
                            className="absolute -bottom-12 md:-bottom-16 px-10 md:px-14 text-[0.40rem] sm:text-[0.50rem] md:text-xs max-w-[14rem] sm:max-w-[24rem] md:max-w-[25rem] lg:max-w-2xl text-left text-gray-600"
                        >
                            * The minimum balance requirement applies exclusively to our VIP clients and must be explicitly clarified with a dedicated client manager

                        </p>
                    </div>
                </div>

                <ButtonWithIcon title='Open account' className="bg-[#bab9b9a8]" link='/request' />
            </div>
        </div >
    );
}
