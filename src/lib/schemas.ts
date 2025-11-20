import { z } from 'zod';

export const summitRegistrationSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
  country: z.string().min(2, 'Country is required'),
  organization: z.string().min(2, 'Organization is required'),
  title: z.string().min(2, 'Title/Role is required'),
  attendanceType: z.string().min(1, 'Please select attendance type'),
  interests: z.array(z.string()).min(1, 'Please select at least one interest'),
});

export const hackathonRegistrationSchema = z.object({
  teamName: z.string().min(2, 'Team name must be at least 2 characters'),
  leaderName: z.string().min(2, 'Team leader name is required'),
  leaderEmail: z.string().email('Invalid email address'),
  leaderPhone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
  institution: z.string().min(2, 'Institution is required'),
  teamSize: z.number().min(2, 'Team must have at least 2 members').max(4, 'Team can have maximum 4 members'),
  qualifierEvent: z.string().min(1, 'Please select a qualifier event'),
  projectIdea: z.string().min(10, 'Please provide a brief project idea (at least 10 characters)'),
});

export const partnershipSchema = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  contactPerson: z.string().min(2, 'Contact person name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
  tier: z.string().min(1, 'Please select a partnership tier'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
});
