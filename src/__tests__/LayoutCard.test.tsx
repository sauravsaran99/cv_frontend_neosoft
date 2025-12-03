import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import LayoutCard from '../components/LayoutCard';

describe('LayoutCard', () => {
    const mockProps = {
        id: 'layout-1',
        name: 'Professional',
        description: 'A clean and professional layout',
        thumbnail: 'https://example.com/layout.jpg',
        onPreview: vi.fn(),
        onUse: vi.fn(),
    };

    it('renders layout name and description', () => {
        render(<LayoutCard {...mockProps} />);
        expect(screen.getByText('Professional')).toBeInTheDocument();
        const descriptions = screen.getAllByText('A clean and professional layout');
        expect(descriptions).toHaveLength(2);
    });

    it('calls onPreview when preview button is clicked', () => {
        render(<LayoutCard {...mockProps} />);
        const previewButton = screen.getByRole('button', { name: /preview/i });
        fireEvent.click(previewButton);
        expect(mockProps.onPreview).toHaveBeenCalledWith('layout-1');
    });

    it('calls onUse when use button is clicked', () => {
        render(<LayoutCard {...mockProps} />);
        const useButton = screen.getByRole('button', { name: /use/i });
        fireEvent.click(useButton);
        expect(mockProps.onUse).toHaveBeenCalledWith('layout-1');
    });
});
