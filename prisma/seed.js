var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import prisma from '../src/lib/prisma';
import moment from 'moment';
import { EnglishLevel } from '.prisma/client';
function getRandomAmountOfHourToAdd() {
    // 1-5
    return Math.floor(Math.random() * 5) + 1;
}
const email = 'henokgetachew500@gmail.com';
const postsData = [
    {
        title: 'Laravel Developer needed',
        description: 'Need a laravel developer to perform the following functions on an existing website: Must be willing to work on the weekend to complete the project. Must have a strong understanding of CSS. Update page layouts Update single blog page layout adding comments Update Mega Menu Design Add Ecommerce Functions Ensure website functions/renders',
    },
    {
        title: 'Create website for small startup company',
        description: 'Design a simple website for a start up company. with e-commerce for only two or three \n        initial products. Videos of products in use and still photos on website. \n        domain name already purchased. would like options for hosting and servicing or\n         recommendations for same. I need to be able to communicate in English. I would need e-commerce to be able to securely accept pre-orders with credit cards or other electronic payments. Please advise if you can edit videos to remove/blur out faces of people. Details and photos attached. Option for visitors to input cell phone number and email for updates to availability of product.\n    /renders',
    },
    {
        title: 'Fixing/Editing One-Pager Landing Pages',
        description: 'We need someone who has good HTML, Landing page building and designing skills. We have couple landing pages to be fixed and optimized. 1) They are one-pager and we need them to open "responsively" at all types of devices and screensizees without any deformation or dimension issues. 2) We also need to modify the pages and change some/blur out faces of people. Details and photos attached. Option for visitors to input cell phone number and email for updates to availability of product.\n    /renders',
    },
    {
        title: 'Looking for on-call WordPress dev to do weekly site support and updates, 5 hours a week ongoing',
        description: "Have a relatively simple website for a school that will need someone to do maintenance on, occasionally fix plugins / errors on the site, and be available for doing basic content edits and blog / news posts. Turnaround time for requests would ideally be 24-48 hours. Utilization of a ticketing system for requests. Need someone who doesn't mind doing simple/blur out faces of people. Details and photos attached. Option for visitors to input cell phone number and email for updates to availability of product.\n    /renders",
    },
    {
        title: 'Develop & Design My Website',
        description: "Hello, I need someone to develop and design an entire website for me. I don't know anything about web design so you'd have to tell me what you would need from me. I already bought the domain so that is all I have. I want it to be similar to this website: https://playonstake.eu/stake-dice-calculator.html You must be able to recreate the same calculator along with/ errors on the site, and be available for doing basic content edits and blog / news posts. Turnaround time for requests would ideally be 24-48 hours. Utilization of a ticketing system for requests. Need someone who doesn't mind doing simple/blur out faces of people. Details and photos attached. Option for visitors to input cell phone number and email for updates to availability of product.\n    /renders",
    },
];
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Start seeding ...');
        const company = yield prisma.company.create({
            data: {
                companyName: 'EBS',
                logo: `${process.env.NEXT_PUBLIC_S3_CLOUD_FRONT_URL}/Sample+tv+tumbnails/ebssport800x445.jpg`,
                account: {
                    create: {
                        email,
                        firstName: 'henok',
                        lastName: 'getachew',
                        fullName: 'henok getachew',
                        password: '12345678',
                        accountType: 'COMPANY',
                        image: `${process.env.NEXT_PUBLIC_S3_CLOUD_FRONT_URL}/Sample+tv+tumbnails/ebssport800x445.jpg`,
                    },
                },
            },
        });
        // loop through the postsData 5 times and create all of them
        for (let i = 0; i < postsData.length * 4; i++) {
            const pd = postsData[i % postsData.length];
            const posts = yield prisma.jobPost.create({
                data: {
                    title: pd.title,
                    description: pd.description,
                    jobType: 'FULL_TIME',
                    email,
                    category: [
                        'IT',
                        'DESIGN',
                        'CUSTOMER_SERVICE',
                        'ADMINISTRATIVE',
                        'FINANCE',
                        'LEGAL',
                        'EDUCATION',
                        'ENGINEERING',
                    ],
                    vacancy: 1,
                    applicationDeadline: moment()
                        .add(getRandomAmountOfHourToAdd(), 'hours')
                        .toDate(),
                    englishLevel: EnglishLevel.FLUENT,
                    salaryType: 'MONTHLY',
                    skills: [
                        'HTML',
                        'CSS',
                        'JAVASCRIPT',
                        'REACT',
                        'NEXTJS',
                        'GRAPHQL',
                        'PRISMA',
                        'NODEJS',
                    ],
                    salary: [1000, 3000],
                    location: 'United States',
                    experienceLevel: 'Junior',
                    // obSite, jobExperience, isVisible, company
                    jobSite: 'HYBRID',
                    jobExperience: 5,
                    isVisible: true,
                    companyId: company.id,
                },
            });
        }
        console.log('Seeding finished.');
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
//# sourceMappingURL=seed.js.map