import type { Projects } from "./projects";


const projects: Array<Projects> = [
    {
        title: 'Test 1',
        technologies: ['HTML', 'CSS', 'Typescript', 'Vue'],
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in libero in dui consectetur aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam cursus, nunc at aliquet pellentesque, metus ligula porttitor augue, sit amet accumsan erat mauris a metus. Sed eu erat bibendum, aliquet lorem id, vestibulum est. Ut scelerisque sem nec varius tempor. Vestibulum lobortis sodales odio, non commodo ligula fringilla facilisis. Donec vel mauris ut tellus convallis venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras neque purus, viverra sed efficitur id, hendrerit gravida lorem.',
        url: 'https://github.com/maddyscodes',
        status: 'In progress',
    },
    {
        title: 'Test 2',
        technologies: ['HTML', 'CSS'],
        description:
            'Proin in libero in dui consectetur aliquam. Aliquam cursus, nunc at aliquet pellentesque, metus ligula porttitor augue, sit amet accumsan erat mauris a metus. Sed eu erat bibendum, aliquet lorem id, vestibulum est. ',
        url: 'https://github.com/maddyscodes',
        status: 'Complete',
    },
    {
        title: 'Test 3',
        technologies: ['Figma'],
        description: 'test test test three three three.',
        url: 'https://github.com/maddyscodes',
        status: 'Complete',
    }
];

export default projects;
