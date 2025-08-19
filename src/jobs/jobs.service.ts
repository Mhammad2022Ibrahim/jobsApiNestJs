import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job } from '@prisma/client';

@Injectable()
export class JobsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateJobDto): Promise<Job> {
    return await this.prisma.job.create({
      data: dto,
    });
  }

  async findAll(): Promise<Job[]> {
    return await this.prisma.job.findMany();
  }

  async findOne(id: number): Promise<Job | null> {
    return await this.prisma.job.findUnique({
      where: { id },
    });
  }

  async remove(id: number): Promise<Job> {
    return await this.prisma.job.delete({
      where: { id },
    });
  }

  async update(id: number, dto: UpdateJobDto): Promise<Job> {
    return await this.prisma.job.update({
      where: { id },
      data: dto,
    });
  }
}
