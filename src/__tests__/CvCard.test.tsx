import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CvCard from '../components/CvCard';

describe('CvCard', () => {
    const mockProps = {
        title: 'My Resume',
        subtitle: 'Last edited today',
        thumbnail: 'https://example.com/image.jpg',
        onEdit: vi.fn(),
        onDelete: vi.fn(),
    };

    it('renders title and subtitle correctly', () => {
        render(<CvCard {...mockProps} />);
        expect(screen.getByText('My Resume')).toBeInTheDocument();
        expect(screen.getByText('Last edited today')).toBeInTheDocument();
    });

    it('calls onEdit when edit button is clicked', () => {
        render(<CvCard {...mockProps} />);
        // The buttons are hidden until hover, but they exist in the DOM.
        // We might need to look for the button by its aria-label or tooltip.
        // The component uses Tooltip with title "Edit".

        // Since the buttons are inside a Box with opacity 0 initially, they might still be clickable in JSDOM unless display:none is used.
        // Let's try finding by the edit icon or tooltip.
        // Let's try finding by the tooltip text if possible, but tooltip text is only shown on hover.
        // Let's rely on the order or the icon.

        const buttons = screen.getAllByRole('button');
        // Expected order: Preview, Edit, Delete
        const editBtn = buttons[1];

        fireEvent.click(editBtn);
        expect(mockProps.onEdit).toHaveBeenCalledTimes(1);
    });

    it('calls onDelete when delete button is clicked', () => {
        render(<CvCard {...mockProps} />);
        const buttons = screen.getAllByRole('button');
        const deleteBtn = buttons[2];

        fireEvent.click(deleteBtn);
        expect(mockProps.onDelete).toHaveBeenCalledTimes(1);
    });
});
