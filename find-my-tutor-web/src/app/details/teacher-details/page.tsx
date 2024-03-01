'use client'

import React, { useRef, useState } from 'react'
import { RxCross2 } from 'react-icons/rx';

const page = () => {
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const genderRef = useRef<HTMLSelectElement>(null);
    const phoneNumberRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLTextAreaElement>(null);
    const pinCodeRef = useRef<HTMLInputElement>(null);
    const numExpRef = useRef<HTMLInputElement>(null);
    const qualificationRef = useRef<HTMLInputElement>(null);
    const specializationRef = useRef<HTMLInputElement>(null)

    const AADHAR_REGEX = /(^[0-9]{4}[0-9]{4}[0-9]{4}$)|(^[0-9]{4}\s[0-9]{4}\s[0-9]{4}$)|(^[0-9]{4}-[0-9]{4}-[0-9]{4}$)/

    const [qualifications, setQualifications] = useState<String[]>([])
    const [specializations, setSpecializations] = useState<String[]>([])

    const addQualification = () => {
        const x = qualificationRef.current?.value
        console.log(x)
        if (!x) return
        setQualifications((prev) => [...prev, x])
        qualificationRef.current.value = ""
        qualificationRef.current.focus()
        return

    }

    const addSpecialization = () => {
        const x = specializationRef.current?.value
        console.log(specializationRef.current?.value, firstNameRef.current?.value)
        // console.log(x,specializationRef.current?.value)
        // if (!x) return
        // setSpecializations((prev) => [...prev, x])
        // specializationRef.current.value = ""
        // specializationRef.current.focus()
        // return
    }

    const deleteQualification = (q: String) => {

        const newQualifications = qualifications.filter((x) => x !== q)
        setQualifications(newQualifications)

    }

    const deleteSpecialization = (q: String) => {
        const newQualifications = specializations.filter((x) => x !== q)
        setSpecializations(newQualifications)
    }

    console.log(qualifications, specializations)

    return (
        <div className="min-w-screen min-h-screen overflow-hidden">
            <div className="flex flex-col overflow-hidden max-w-[2000px] w-full m-auto">
                <div className="flex absolute w-[100%] overflow-hidden">
                    <div className="relative left-[-10vw] w-2/6 h-[100vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FED6D4] from-10% to-transparent to-70% rounded-full"></div>
                    <div className="relative right-[-35vw] top-[-20vh] lg:right-[-35vw] lg:top-[-14vh] w-[80vh] h-[80vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-logIn-300 from-10% to-transparent to-70% rounded-full"></div>
                </div>
                <div className="relative  overflow-hidden min-h-[100vh] w-full flex-col flex items-center lg:pl-10 lg:pr-10  pr-4 pl-4">
                    <div className="flex flex-col items-center">
                        <p className="text-baseColor-400 mt-10 text-[5.2vw] lg:text-4xl font-semibold">
                            Hi! Sir welcome to Mytutor 👋🏻
                        </p>
                        <p className="mr-3 text-[3vw] lg:text-sm font-medium">
                            Let’s help you to find your dream tutor
                        </p>
                    </div>
                    <div className="flex justify-start w-[90vw] lg:w-[66vw] mt-10">
                        <p className="text-[3.5vw] sm:text-lg font-semibold">
                            <span className="text-[#FF3429]">*</span>Please fill out the
                            following details carefully
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-[6vw] mt-[2vh]">
                        <div>
                            <h6 className="font-medium mb-2">First Name </h6>
                            <input
                                ref={firstNameRef}
                                type="text"
                                required
                                className={`rounded-md w-[90vw] lg:w-[30vw] h-8 text-baseColor-600 shadow-baseColor-100 relative block px-4 py-1 border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm`}
                                placeholder="Enter your first name"
                            />
                        </div>

                        <div>
                            <h6 className="font-medium mb-2">Last Name</h6>
                            <input
                                ref={lastNameRef}
                                type="text"
                                required
                                className={`rounded-md w-[90vw] lg:w-[30vw]  h-8 text-baseColor-600 shadow-baseColor-100 relative block px-4 py-1 border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm`}
                                placeholder="Enter your last name"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-[6vw] mt-[3.6vh]">
                        <div>
                            <h6 className="font-medium mb-2">Gender</h6>
                            <select
                                ref={genderRef}
                                required
                                className={`rounded-md bg-white w-[90vw] lg:w-[30vw] h-8 text-gray-400 shadow-baseColor-100 relative block px-4 py-1 border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm`}
                            >
                                <option value="" disabled>
                                    Select your gender
                                </option>
                                <option className="text-baseColor-400" value="male">
                                    Male
                                </option>
                                <option className="text-baseColor-400" value="female">
                                    Female
                                </option>
                                <option className="text-baseColor-400" value="other">
                                    Other
                                </option>
                            </select>
                        </div>

                        <div>
                            <h6 className="font-medium mb-2">Phone Number</h6>
                            <input
                                ref={phoneNumberRef}
                                type="number"
                                required
                                className={`rounded-md w-[90vw] lg:w-[30vw]  h-8 text-baseColor-600 shadow-baseColor-100 relative block px-4 py-1 border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm`}
                                placeholder="Enter your phone number"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-[6vw] mt-[3.6vh] ">
                        <div className="">
                            <h6 className="font-medium mb-2">Address</h6>
                            <textarea
                                ref={addressRef}
                                required
                                className={`rounded-md w-[90vw] resize-none lg:w-[30vw]  h-36 text-baseColor-600 shadow-baseColor-100 relative block px-4 py-1 border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm`}
                                placeholder="Enter your full address"
                            ></textarea>
                        </div>

                        <div className="flex flex-col justify-between">
                            <div>
                                <h6 className="font-medium mb-2">Pin Code</h6>
                                <input
                                    ref={pinCodeRef}
                                    type="number"
                                    required
                                    className={`rounded-md w-[90vw] lg:w-[30vw]  h-8 text-baseColor-600 shadow-baseColor-100 relative block px-4 py-1 border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm`}
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div className="flex mt-6 lg:mt-3 flex-col gap-0 items-center">
                                <button
                                    type="submit"
                                    className="group relative w-[90vw] sm:w-full flex justify-center  py-1 px-8 border border-transparent text-sm font-semibold rounded-md text-white bg-baseColor-600 "
                                >
                                    Use your current location
                                </button>
                                <p className="font-medium">or</p>
                                <button
                                    type="submit"
                                    className="group relative w-[90vw] sm:w-full flex justify-center  py-1 px-8 border border-transparent text-sm font-semibold rounded-md text-white bg-baseColor-600 "
                                >
                                    Pick location from map
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-[6vw] mt-[3.6vh]">
                        <div>
                            <h6 className="font-medium mb-2">Year of Experience </h6>
                            <input
                                ref={numExpRef}
                                type="number"
                                required
                                className={`rounded-md w-[90vw] lg:w-[30vw] h-8 text-baseColor-600 shadow-baseColor-100 relative block px-4 py-1 border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm`}
                                placeholder="Enter your experience"
                            />
                        </div>

                        <div>
                            <h6 className="font-medium mb-2">Specialization</h6>
                            <div className='flex flex-row w-[70vw] lg:w-[30vw] justify-between'>
                                <input
                                    ref={specializationRef}
                                    type="text"
                                    required
                                    className={`rounded-md w-[58vw] lg:w-[20vw] h-8 text-baseColor-600 shadow-baseColor-100 relative block px-4 py-1 border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm`}
                                    placeholder="Enter your experience"
                                />
                                <div className='rounded-md w-[10vw] lg:w-[8vw] h-8 flex items-center justify-center border border-transparent text-sm font-semibold text-white bg-baseColor-600' onClick={addSpecialization}>Add +</div>
                            </div>
                            {
                                specializations &&
                                <div className='flex flex-wrap w-[70vw] lg:w-[30vw] p-2 gap-1'>
                                    {specializations.map((q, index) => (
                                        <div
                                            key={index}
                                            className="px-2 text-sm py-1 bg-baseColor-300 rounded-md flex items-center"
                                        >
                                            {q}
                                            <RxCross2 className="pl-1 cursor-pointer" size={20} onClick={() => { deleteSpecialization(q) }} />
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-[6vw] mt-[3.6vh]">
                        <div>
                            <h6 className="font-medium mb-2">Qualifications </h6>
                            <div className='flex flex-row w-[70vw] lg:w-[30vw] justify-between'>
                                <input
                                    ref={qualificationRef}
                                    type="text"
                                    required
                                    className={`rounded-md w-[58vw] lg:w-[20vw] h-8 text-baseColor-600 shadow-baseColor-100 relative block px-4 py-1 border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm`}
                                    placeholder="Enter your experience"
                                />
                                <div className='rounded-md w-[10vw] lg:w-[8vw] h-8 flex items-center justify-center border border-transparent text-sm font-semibold text-white bg-baseColor-600' onClick={addQualification}>Add +</div>
                            </div>
                            {
                                qualifications &&
                                <div className='flex flex-wrap w-[70vw] lg:w-[30vw] p-2 gap-1'>
                                    {qualifications.map((q, index) => (
                                        <div
                                            key={index}
                                            className="px-2 text-sm py-1 bg-baseColor-300 rounded-md flex items-center"
                                        >
                                            {q}
                                            <RxCross2 className="pl-1 cursor-pointer" size={20} onClick={() => { deleteQualification(q) }} />
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>

                        <div>
                            <h6 className="font-medium mb-2">Aadhar Number</h6>
                            <input
                                ref={specializationRef}
                                type="number"
                                required
                                className={`rounded-md w-[90vw] lg:w-[30vw]  h-8 text-baseColor-600 shadow-baseColor-100 relative block px-4 py-1 border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm`}
                                placeholder="Enter your aadhar number"
                            />
                        </div>
                    </div>



                    {/* <div className="flex flex-col mt-[2vh]">
                        <h6 className="font-medium mb-2">Subjects </h6>
                        <div className="border border-baseColor-300 rounded-md ">
                            <div className="flex flex-wrap gap-3 pt-1.5 pl-4 pr-4 w-[90vw] lg:w-[66vw]">
                                {selectedSubjects.map((subject, index) => (
                                    <div
                                        key={index}
                                        className="px-2 text-sm py-1 bg-baseColor-300 rounded-md flex items-center"
                                        onClick={() => deleteSubject(subject)}
                                    >
                                        {subject.subjectName}
                                        <RxCross2 className="pl-1 cursor-pointer" size={20} />
                                    </div>
                                ))}
                            </div>
                            <input
                                type="text"
                                autoComplete="text"
                                value={subjectInput}
                                onChange={handleSearchSubject}
                                className={`rounded-md w-[90vw] lg:w-[66vw] h-8 text-baseColor-600 shadow-baseColor-100 relative block px-4 py-1 focus:ring-0 focus:outline-none sm:text-sm`}
                                placeholder="Search subjects"
                            />
                        </div>
                        {subjectInput.length > 0 && (
                            <div className="max-h-60 w-44 bg-baseColor-200 ml-2 flex flex-col gap-1 overflow-y-auto ">
                                {subjects
                                    .filter((subject) =>
                                        subject.subjectName.startsWith(subjectInput)
                                    )
                                    .map((value, index) => {
                                        return (
                                            <div
                                                key={value.id}
                                                className="text-black relative text-xs px-4 py-2 hover:bg-baseColor-400 cursor-pointer"
                                                onClick={() => selectSubjectOption(value)}
                                            >
                                                {value.subjectName}
                                            </div>
                                        );
                                    })}
                            </div>
                        )}
                    </div> */}

                    {/* <div className="flex justify-center my-6">
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className="  relative lg:w-[16vw] w-[90vw] flex justify-center  py-1 px-8 border border-transparent text-sm font-semibold rounded-md text-white bg-[#FF3429]"
                        >
                            Submit
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default page