import fs from 'fs/promises';
import path from 'path';
import { Job } from './data'; 

export async function getJobs(): Promise<Job[]>  {
    const filePath = path.join(process.cwd(), '/data/jobs.json');
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data).job_postings.map((job: Omit<Job, 'id'>, index: number) => ({
        ...job, id: index,
    }));
}

export async function getJobById(id: number): Promise<Job | null> {
    const jobs = await getJobs();
    return jobs.find(job => job.id === id) || null;
}
