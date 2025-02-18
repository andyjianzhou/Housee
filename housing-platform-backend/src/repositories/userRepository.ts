import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (email: string, password: string) => {
  return await prisma.user.create({
    data: { email, password },
  });
};

export const getAllUsers = async () => {
  return await prisma.user.findMany();
};

export const getUserById = async (id: string) => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

export const deleteUser = async (id: string) => {
  return await prisma.user.delete({
    where: { id },
  });
};
