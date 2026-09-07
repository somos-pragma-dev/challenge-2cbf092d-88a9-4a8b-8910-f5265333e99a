import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        {
          provide: UserService,
          useValue: {
            create: jest.fn().mockResolvedValue({} as any),
            findAll: jest.fn().mockResolvedValue([]),
            findOne: jest.fn().mockResolvedValue({} as any),
            update: jest.fn().mockResolvedValue({} as any),
            remove: jest.fn().mockResolvedValue(undefined),
          },
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a user', async () => {
    const createUserDto: CreateUserDto = {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
      role: 'user',
    };
    await controller.create(createUserDto);
    expect(service.create).toHaveBeenCalledWith(createUserDto);
  });

  it('should find all users', async () => {
    await controller.findAll();
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should find a user by ID', async () => {
    await controller.findOne(1);
    expect(service.findOne).toHaveBeenCalledWith(1);
  });

  it('should update a user by ID', async () => {
    const updateUserDto: UpdateUserDto = {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
      role: 'user',
    };
    await controller.update(1, updateUserDto);
    expect(service.update).toHaveBeenCalledWith(1, updateUserDto);
  });

  it('should remove a user by ID', async () => {
    await controller.remove(1);
    expect(service.remove).toHaveBeenCalledWith(1);
  });
});